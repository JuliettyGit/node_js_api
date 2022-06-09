const express = require('express');
const userRouter = require('./routes/users.routes');
const userRoleRouter = require('./routes/userRoles.routes');
const orderRouter = require('./routes/order.routes');
const dishRouter = require('./routes/dish.routes');
const deliverymanRouter = require('./routes/deliveryman.routes');
const dishCategoryRouter = require('./routes/dishCategory.routes');
const ingredientRouter = require('./routes/ingredient.routes');
const orderItemRoutes = require('./routes/orderItem.routes');
const orderStatusRoutes = require('./routes/orderStatus.routes');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', userRoleRouter);
app.use('/api', orderRouter);
app.use('/api', dishRouter);
app.use('/api', deliverymanRouter);
app.use('/api', dishCategoryRouter);
app.use('/api', ingredientRouter);
app.use('/api', orderItemRoutes);
app.use('/api', orderStatusRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
