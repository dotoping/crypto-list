import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PaginationOutput from './PaginationOutput';

function CryptoList() {

    const [lists, setLists] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalCount, setTotalCount] = useState(0);
    
    //paginated
    const totalLists = totalCount.length;
    const perPage = 100;
    const page = 1;
    const totalPages = Math.ceil(totalLists / perPage);

    useEffect(() => {
        const fetchListTotal = async () => {
            try {
                const totalLists = await axios.get("https://api.coingecko.com/api/v3/coins/list?include_platform=false");

                setTotalCount(totalLists.data);

                const fetchList = async () => {
                    try {
                        setError(null);
                        setLists(null);

                        setLoading(true);
                        const response = await axios.get(
                            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&
                    order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`
                        );

                        setLists(response.data);
                    } catch (e) {
                        setError(e);
                    }
                    setLoading(false);
                };

                fetchList();
            } catch (e) {
                setError(e)
            }
        };

        fetchListTotal();

        
    }, []);

    if (loading) 
        return <div>loading...</div>;
    if (error) 
        return <div>catched error</div>;
    if (!lists) 
        return null;
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            # {totalLists}
                        </th>
                        <th>
                            Coin
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Total Volume
                        </th>
                        <th>
                            Market Cap
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lists.map((list, index) => (
                            <tr key={list.id}>
                                <td>{(index + 1) + (perPage * (page -1))}</td>
                                <td><img src={list.image} width="15px" alt={list.symbol}/> {list.name}</td>
                                <td>${
                                        list
                                            .current_price
                                            .toString()
                                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                                    }</td>
                                <td>${Number(list.total_volume).toLocaleString('en-US')}</td>
                                <td>${Number(list.market_cap).toLocaleString('en-US')}</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <PaginationOutput totalPages={totalPages}/>
        </div>
    );
}

export default CryptoList
