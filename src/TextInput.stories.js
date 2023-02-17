import TextInput from "./TextInput";

export default {
    title:'Text Input',
    component: <TextInput/>
}

const Template = (args) => <TextInput {...args} />

const Default = Template.bind({})
Default.args = {
    label:'Text Input'
}

export {Default}