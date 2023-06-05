import { VStack, Heading } from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';

const Home = () => {
  const {Moralis} = useMoralis();
  async function food(){
    const Food = Moralis.Object.extend("Food")
    const food1 = new Food();

    food1.set("food", "pizza");
    food1.set("ethAddress", "0x0");

    await food1.save();
  }

  return (
    <VStack alignItems={'start'}>
      <Heading mb={8}>Home</Heading>
      <button onClick={food}>Food</button>
    </VStack>
  )
};

export default Home;
