import axios from 'axios';

function calEmAl(){	
						 
		Promise.all([
							axios.get('https://api.thingspeak.com/channels/762750/fields/1/last.json'),
							axios.get('https://api.thingspeak.com/channels/762750/fields/2/last.json'),
							axios.get('https://api.thingspeak.com/channels/762750/fields/3/last.json')
										])
								// use arrow function to avoid loosing context
								// BTW you don't need to use axios.spread with ES2015 destructuring
								.then(([temp, hum,hygr]) => {
									console.log(temp.data.field1);
									this.setState({temp:temp.data.field1,hum:hum.data.field2,hygr:hygr.data.field3});
									
									});
				
				
				}


export{calEmAl};