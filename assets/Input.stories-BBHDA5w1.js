import{j as e}from"./jsx-runtime-DXIizya4.js";import{a as c}from"./utils-DgWKjmuI.js";import"./iframe-C8C3KVR7.js";import"./preload-helper-D9Z9MdNV.js";function n({className:r,type:d,...l}){return e.jsx("input",{type:d,"data-slot":"input",className:c("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",r),...l})}n.__docgenInfo={description:"",methods:[],displayName:"Input"};const g={args:{className:"w-96",disabled:!1,placeholder:"Email",type:"email"},argTypes:{placeholder:{description:"The placeholder text for the input field."},type:{control:"select",description:"The type of the input field.",options:["button","checkbox","color","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"],table:{defaultValue:{summary:"text"}}}},component:n,parameters:{layout:"centered",docs:{description:{component:"Displays a form input field or a component that looks like an input field."}}},tags:["autodocs"],title:"Workspace/shadcn-ui/Input"},t={},a={args:{disabled:!0}},s={render:r=>e.jsxs("div",{className:"grid items-center gap-1.5",children:[e.jsx("label",{htmlFor:"email",children:r.placeholder}),e.jsx(n,{...r,id:"email"})]})},i={render:r=>e.jsxs("div",{className:"grid items-center gap-1.5",children:[e.jsx("label",{htmlFor:"email-2",children:r.placeholder}),e.jsx(n,{...r,id:"email-2"}),e.jsx("p",{className:"text-foreground/50 text-sm",children:"Enter your email address."})]})},o={render:r=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(n,{...r}),e.jsx("button",{className:"bg-primary text-primary-foreground rounded px-4 py-2",type:"submit",children:"Subscribe"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:"The default form of the input field.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...a.parameters?.docs?.source},description:{story:"Use the `disabled` prop to make the input non-interactive and appears faded,\nindicating that input is not currently accepted.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="grid items-center gap-1.5">
      <label htmlFor="email">{args.placeholder}</label>
      <Input {...args} id="email" />
    </div>
}`,...s.parameters?.docs?.source},description:{story:"Use the `Label` component to includes a clear, descriptive label above or\nalongside the input area to guide users.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="grid items-center gap-1.5">
      <label htmlFor="email-2">{args.placeholder}</label>
      <Input {...args} id="email-2" />
      <p className="text-foreground/50 text-sm">Enter your email address.</p>
    </div>
}`,...i.parameters?.docs?.source},description:{story:`Use a text element below the input field to provide additional instructions
or information to users.`,...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center space-x-2">
      <Input {...args} />
      <button className="bg-primary text-primary-foreground rounded px-4 py-2" type="submit">
        Subscribe
      </button>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"Use the `Button` component to indicate that the input field can be submitted\nor used to trigger an action.",...o.parameters?.docs?.description}}};const h=["Default","Disabled","WithLabel","WithHelperText","WithButton"];export{t as Default,a as Disabled,o as WithButton,i as WithHelperText,s as WithLabel,h as __namedExportsOrder,g as default};
