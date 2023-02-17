import ButtonSizes from "./Buttonsizes";

export default {
    title:'Buttons of different Sizes',
    component: <ButtonSizes/>
}

const Template = (args) => <ButtonSizes {...args} />
const LargeButton = Template.bind({})
const MediumButton = Template.bind({})
const SmallButton = Template.bind({})


LargeButton.args = {
    label:'Large',
    size:'lg'
}

MediumButton.args = {
    label:'Medium',
    size:'md'
}

SmallButton.args = {
    label:'Small',
    size:'sm'
}

export {LargeButton, MediumButton, SmallButton}