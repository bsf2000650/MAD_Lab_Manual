import React from 'react';
import { View, Button } from 'react-native';
import * as SMS from 'expo-sms';

const SendSMSComponent = () => {
  const sendSMS = async () => {
    const phoneNumber = '+923468738864'; // Replace with the recipient's phone number
    const message = 'Hello, this is a test message.'; // Replace with your message

    try {
      const { result } = await SMS.sendSMSAsync(
        [phoneNumber],
        message
      );

      if (result === SMS.SentStatus.SENT) {
        console.log('SMS sent successfully');
      } else {
        console.error('Error sending SMS');
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  return (
    <View>
      <Button title="Send SMS" onPress={sendSMS} />
    </View>
  );
};

export default SendSMSComponent;
