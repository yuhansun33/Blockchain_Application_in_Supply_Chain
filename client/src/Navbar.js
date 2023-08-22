
export default function Navbar() {

    return <nav className='nav'>
        <a href='/' className='site-title'>SupplyChain Blockchain</a>
        <ul>
            <li>
                <a href='/component/AllProducts'>Products</a>
            </li>

            <li>
                <a href='/component/ProductsId'>Products ID</a>
            </li>


            <li>
                <a href='/component/address'>Manufacturer</a>
            </li>

            <li>
                <a href='/component/Search'>Serach</a>
            </li>


        </ul>
    </nav>
}
