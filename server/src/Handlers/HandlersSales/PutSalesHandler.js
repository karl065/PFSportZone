const {
  actualizarVenta,
} = require('../../Controllers/ControllersSales/PutSalesController');

const putSalesHandler = async (req, res) => {
  console.log(" status "+req.params.id+" status "+req.body.status);
  const {id} = req.params;
  const {
    
    status,
  } = req.body;
  
  try {
    const venta = {
      ...(status !== undefined && {status}),
    };
    const ventaActualizada = await actualizarVenta(id, venta);
    return res.status(200).json(ventaActualizada);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {
  putSalesHandler,
};
