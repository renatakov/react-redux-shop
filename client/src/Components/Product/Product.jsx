import s from './Product.module.css'
import wishlistImg from "../../images/logos/Wishlist.svg"
import deleteFromWishlistImg from "../../images/logos/Vector.svg"
const Product = (props) =>{
    // console.log(props.products)
    let prices = props.sale === true ? <p className={s.sale}>{props.price}$</p> : <p className={s.price}>{props.price}$</p>
    const reviewImg = []
    for(let i = 0; i < props.stars; i++){
        reviewImg.push(
            <img width="20px" height="20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQZwqgL2tnG5LOLljy-Mv73yHr5neg5qj8Q&usqp=CAU" alt=""/>
        )
    }
    const wishlistBtn = () => {
        props.addToWishlist(props.id)
        console.log(props.wishlist)
    }
    const cartBtn = () => {
        props.addToCart(props.id)
        console.log(props.cart)
    }

    const deleteFromWishlistFunction = () => {
        props.deleteFromWishlist(props.id)
    }
    return(
        
        <div className={s.productContainer}>
            {props.saleNum > 0 && <span>-{props.saleNum}%</span>}
            <div className={s.productContainer__firstBlock}>
            <img className={s.productImg} src={props.img} alt=""/>
            {props.addToWishlist && <button onClick={wishlistBtn} className={s.wishlistBtn}>
                <img src={wishlistImg} alt="" />
            </button>}
            
            </div>
            <h3>{props.title}</h3>
            {prices}
            {reviewImg}
            <span>({props.reviews})</span>
            {props.deleteFromWishlist && <button onClick={deleteFromWishlistFunction} className={s.deleteFromWishlistBtn}>
                <img src={deleteFromWishlistImg} alt=""/>
            </button> }
            
            {props.addToCart && <button  onClick={cartBtn} className={s.addToCartBtn}>Add To Cart</button>}
            
        </div>
        
    )
}

export default Product