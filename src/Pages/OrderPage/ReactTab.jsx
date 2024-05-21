import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useLoadMenuData from '../../Hooks/useLoadMenuData';
import OrderTab from './OrderTab';


const ReactTab = () => {
    const items = useLoadMenuData()
    console.log(items)

    const salad = items?.filter(item=> item.category === 'salad')
    const pizza = items?.filter(item=> item.category === 'pizza')
    const dessert= items?.filter(item=> item.category === 'dessert')
    const soup = items?.filter(item=> item.category === 'soup')
    const drinks = items?.filter(item=> item.category === 'drinks')
    return (
        <Tabs className='container mx-auto'>
            <TabList>
                <Tab>Salad</Tab>
                <Tab>Pizza</Tab>
                <Tab>Soup</Tab>
                <Tab>Dessert</Tab>
                <Tab>Drinks</Tab>
            </TabList>

            {/* salad items */}
            <TabPanel>
                <OrderTab recipeCategory={salad}></OrderTab>
            </TabPanel>

            {/* pizza items */}
            <TabPanel>
                <OrderTab recipeCategory={pizza}></OrderTab>
            </TabPanel>

            {/* soup items */}
            <TabPanel>
                <OrderTab recipeCategory={soup}></OrderTab>
            </TabPanel>

            {/* dessert items */}
            <TabPanel>
                <OrderTab recipeCategory={dessert}></OrderTab>
            </TabPanel>

            {/* drinks items */}
            <TabPanel>
                <OrderTab recipeCategory={drinks}></OrderTab>
            </TabPanel>
        </Tabs>
    );
};

export default ReactTab;