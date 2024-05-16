import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeTab = () => {
  let data = {
    data: [
      {
        description: 'car',
        id: 2,
        image:
          'https://rentvacation.s3.amazonaws.com/Sub_Service_Type/48f0e44d4dbf58ca082cb0001',
        parent_id: 1,
        price_type: 1,
        service_type: 'Cars for Rent',
      },
      {
        description: 'car driver',
        id: 3,
        image:
          'https://rentvacation.s3.amazonaws.com/Sub_Service_Type/48f0e44d4dbf58ca082cb0002',
        parent_id: 1,
        price_type: 1,
        service_type: 'Car Drivers',
      },
    ],
    message: 'Service Type Based Services Data',
    serviceData: {
      description: null,
      id: 1,
      image: null,
      parent_id: null,
      price_type: 1,
      service_type: 'Car Services',
    },
    status: true,
    status_code: 200,
  };

  let newData = {
    data: [
      {
        description: 'maid',
        id: 5,
        image:
          'https://rentvacation.s3.amazonaws.com/Sub_Service_Type/48f0e44d4dbf58ca082cb0003',
        parent_id: 4,
        price_type: 1,
        service_type: 'Maid',
      },
      {
        description: 'nanny desc',
        id: 6,
        image:
          'https://rentvacation.s3.amazonaws.com/Sub_Service_Type/48f0e44d4dbf58ca082cb0005',
        parent_id: 4,
        price_type: 1,
        service_type: 'Nanny',
      },
    ],
    message: 'Service Type Based Services Data',
    serviceData: {
      description: null,
      id: 4,
      image: null,
      parent_id: null,
      price_type: 1,
      service_type: 'Maid/Nanny',
    },
    status: true,
    status_code: 200,
  };

  let TotalPrice =
    serviceData?.propertyExtInfoDetail?.propertyOtherInfo?.expected_price +
    siteServiceFeeData?.data?.service_fee -
    serviceData?.propertyExtInfoDetail?.propertyOtherInfo?.discounted_price;

  return (
    <View>
      <Text>HomeTayyyyb</Text>
      {data.data?.map(item => {
        return (
          <Image
            style={{
              height: 40,
              width: 40,
            }}
            source={{
              uri: item.image,
            }}
          />
        );
      })}
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
