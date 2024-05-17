import React from 'react';
import { Box } from '@mantine/core';
import CustomCard from '../CustomCard/CustomCard';

const MultipleChoice = (props: any) => {
  console.log('🚀 ~ MultipleChoice ~ props:', props);
  return <>{props?.choices.map((item: any) => <CustomCard {...item} key={item.key} />)}</>;
};

export default MultipleChoice;
