// Example object _ with as property
var _ = {
  as: ['angle1', 'angle2']
};

// Initialize as
var as = _.as || ['startAngle', 'endAngle'];

console.log(as); // Output: ['angle1', 'angle2']

// If _.as is not defined
var _ = {};

// Initialize as
var as = _.as || ['startAngle', 'endAngle'];

console.log(as); // Output: ['startAngle', 'endAngle']
