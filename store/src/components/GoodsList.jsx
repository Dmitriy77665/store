import GoodsItem from "./GoodsItem"

const GoodsList = (props) => {
    // eslint-disable-next-line react/prop-types
    const { goods = [] } = props

    
    


    { if (!goods.length) {
        return <h3>Nothing here</h3>
    } else {
            return 
        // eslint-disable-next-line no-unreachable
        <div className="goods">
            {goods.map(item => (
                <GoodsItem  key={item.id} {...item} />
            ))}
        </div>
    } }

}

export default GoodsList