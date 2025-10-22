# First step. Copy from repo and prune
# We are using --build-args to choose the correct app to copy and prune. (any folder under /apps/* is a valid value for TARGET)
FROM node:22.18.0-slim AS base
ENV PNPM_HOME=/root/.local/share/pnpm
ARG NODE_ENV=production
ARG NEXT_TELEMETRY_DISABLED=1
ARG TARGET=web
ENV NODE_ENV=${NODE_ENV}
ENV NEXT_TELEMETRY_DISABLED=${NEXT_TELEMETRY_DISABLED}
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/list/*
RUN corepack enable

WORKDIR /repo

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/${TARGET} ./apps/${TARGET}
COPY packages ./packages

RUN pnpm dlx turbo@latest prune --scope=${TARGET} --docker

# Step 2. Copy what we got from the command "prune" (out/json and out/full), combine them and install depencies using pnpm, after that, build the next project as usual.
FROM node:22.18.0-slim AS installer

ENV PNPM_HOME=/root/.local/share/pnpm
RUN corepack enable
WORKDIR /pruned

COPY --from=base /repo/out/json/ .

RUN pnpm install

COPY --from=base /repo/out/full/ .

RUN pnpm build

# Step 3. Copy just what we need from the result of installing the depencies and build them in order to run the final app.
FROM node:22.18.0-slim AS runner
ARG NODE_ENV=production
ARG NEXT_TELEMETRY_DISABLED=1
ARG TARGET=web
ENV NODE_ENV=${NODE_ENV}
ENV NEXT_TELEMETRY_DISABLED=${NEXT_TELEMETRY_DISABLED}
ENV TARGET=${TARGET}

WORKDIR /app

# COPY --from=installer /pruned/apps/${TARGET}/.next/standalone ./
COPY --from=installer /pruned/apps/${TARGET}/.next/static ./apps/${TARGET}/.next/static
# COPY --from=installer /pruned/apps/${TARGET}/public ./apps/${TARGET}/public

COPY start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 3000

CMD ["/start.sh"]