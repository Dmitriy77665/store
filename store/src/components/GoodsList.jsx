import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { goods = [], addToBasket = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  } else {
    return (
      <div className="goods">
        {goods.map((item) => (
          <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
        ))}
      </div>
    );
  }
};

export default GoodsList;
