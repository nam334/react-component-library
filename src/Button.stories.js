import Button from "./Button";
import img from './img.webp'
export default {
    title: "Button",
    component: Button,
    // variant:'primary',
    args:{
        label: "Default"
    }
};

const Template = args => <Button {...args} />

const Default = Template.bind({})
const Disabled = Template.bind({}) 
const Danger = Template.bind({})
const Outline = Template.bind({})
const ButtonWithIcon = Template.bind({})

Disabled.args = {disabled: true, label:"Disabled", variant:'disabled'}
Danger.args = {disabled:false, label:"Danger", variant:'danger'}

Outline.args = {
    disabled:false,
    label:"Outline",
    variant:'outline'
}

ButtonWithIcon.args = {
    disabled:false,
    label:'Download',
    src:img
}

export {Default, Disabled, Danger,Outline, ButtonWithIcon}