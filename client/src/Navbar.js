
export default function Navbar() {


    // 橫幅功能列
    return <nav className='nav'>

        <a href='/' className='site-title'>SupplyChain Blockchain</a>
        <ul className="dis">


            <li>
                <a href='/component/AllProducts'>Products</a>
            </li>

            <li>
                <a href='/component/ProductsId'>Products ID</a>
            </li>


            <li>
                {/* <a href='/component/address'>Manufacturer</a> */}
                <a href='/component/login'>Manufacturer</a>
            </li>

            <li className="services">
                <a href='/component/Zero'>State</a>
                <ul className="dropdown" >
                    <li><a href="/component/One">PROCESS</a></li>
                    <li><a href="/component/Two">FINISH</a></li>
                    <li><a href="/component/Three">IN_TRANSIT</a></li>
                    <li><a href="/component/Four">ARRIVED</a></li>
                </ul>


            </li>


            <li>
                <a href='/component/Search'>Serach</a>
            </li>
            <li>
                <a href='/test'>Add</a>
            </li>







        </ul>

    </nav>
}
