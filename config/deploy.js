module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'speakfriend-ember',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
