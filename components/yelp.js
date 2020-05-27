import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer zr89FlPDpq_ZHZTuwlhfq95jL4QsbVP14QUxp2cU4toDtIyTCHFn4FjdX4iB_JVUp2YNWQj_DOV1xuxNefcovzFwuP1KiCMkM_tx5HwC7c8Y3nQTLfUUsPy2JFi6XnYx',
  },
});
