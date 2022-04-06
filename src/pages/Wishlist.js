import React from 'react'
import WishlistProductCard from '../components/wishlist-page/WishlistProductCard'
import { useWishlist } from '../context/providers/WishlistProvider'

function Wishlist() {
    const {
        wishlistState: { wishlist },
    } = useWishlist()

    return (
        <main
            style={{ top: '5rem', minHeight: '100vh' }}
            className="relative w-full"
        >
            <div className="spacer-3rem"></div>
            <div className="spacer-3rem"></div>
            <h3 className="text-4xl font-normal text-center text-white mb-2 underline">
                My Wishlist ({wishlist.length})
            </h3>

            <div className="spacer-3rem"></div>
            <div className="spacer-3rem"></div>

            <div className="grid-cols-5">
                <div
                    style={{ gap: '4rem', maxWidth: '1200px', margin: 'auto' }}
                    className="grid grid-cols-3 p-10"
                >
                    {wishlist.map((product, i) => (
                        <WishlistProductCard product={product} key={i} />
                    ))}
                </div>
            </div>
            <div className="spacer-3rem"></div>
            <div className="spacer-3rem"></div>
            <div className="spacer-3rem"></div>
        </main>
    )
}

export default Wishlist
