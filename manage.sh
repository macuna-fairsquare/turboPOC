#!/usr/bin/env bash
# manage.sh — test, build, and run FairSquare modules

set -euo pipefail

# -------- Usage --------
usage() {
    echo "Usage: $0 <command> <module-name> [extra-docker-build-args...]"
    echo ""
    echo "Commands:"
    echo "  docker_build <module-name> [args...]     - Build Docker image (args forwarded to 'docker build')"
    echo "  run_docker   <module-name>               - Run the specified app (image tag = module-name)"
    echo ""
    echo "Examples:"
    echo "  $0 docker_build nf-portal-web -t myrepo/nf-portal-web:dev -t myrepo/nf-portal-web:\$UNIQUE_IMAGE_TAG --build-arg COMMIT=\$GIT_SHA"
    echo "  $0 docker_build nf-portal-web -f fairsquare/apps/nf-portal-web/Dockerfile -t nf-portal-web:latest"
}

# -------- Module helpers --------
validate_module() {
    local module_name=$1
    if [ ! -d "apps/$module_name" ] ; then
        echo "Error: Module '$module_name' not found."
        echo "Available modules:"
        echo -n "  Apps: ";       ls -1 apps/       2>/dev/null | tr '\n' ' '; echo
        exit 1
    fi
}

find_module_path() {
    local module_name=$1
    if   [ -d "apps/$module_name" ]; then echo "apps/$module_name"
    else echo "path not found"; fi
}

is_app() {
    local module_name=$1
    [ -d "apps/$module_name" ]
}

docker_build() {
    local module_name=$1
    shift                          # forward all remaining args to `docker build`
    local docker_args=("$@")

    local module_path
    module_path=$(find_module_path "$module_name")

    if ! is_app "$module_name"; then
        echo "Error: Module '$module_name' is not an app"
        exit 1
    fi

    local dockerfile_path="apps/$module_name/Dockerfile"
    if [ ! -f "$dockerfile_path" ]; then
        echo "No Dockerfile found for $module_name app at $dockerfile_path"
        exit 1
    fi

    echo "Building Docker image for app: $module_name"
    echo "Running: docker build --build-arg TARGET=$module_name ${docker_args[*]} -f $dockerfile_path ."
    docker build --build-arg TARGET=$module_name "${docker_args[@]}" -f "$dockerfile_path" .
}

# -------- Main --------
main() {
    if [ $# -lt 1 ]; then
        usage
        exit 0
    fi

    local command=$1; shift

    case "$command" in
        docker-build)
            if [ $# -lt 1 ]; then usage; exit 1; fi
            local module_name=$1; shift
            validate_module "$module_name"
            docker_build "$module_name" "$@"
            ;;
        *)
            echo "Error: Unknown command '$command'"
            usage
            exit 1
            ;;
    esac
}

main "$@"