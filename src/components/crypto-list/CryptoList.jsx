import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Paging from '../pagination/Paging';

import styles from './CryptoList.module.css'

function CryptoList() {

    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [listsPerPage, setListsPerPage] = useState(50);

    //paginated
    const totalLists = totalCount.length;
    const page = currentPage;
    const totalPages = Math.ceil(totalLists / listsPerPage);
    

    useEffect(() => {
        
        const fetchListTotal = async () => {
            try {
                setError(null);
                setTotalCount([]);

                setLoading(true);
                const totalLists = await axios.get(
                    "https://api.coingecko.com/api/v3/coins/list?include_platform=false"
                );

                setTotalCount(totalLists.data);

            } catch (e) {
                setError(e)
            }
        };

        fetchListTotal();

    }, []);

    useEffect(() => {
        const fetchList = async () => {
            try {
                setError(null);
                setLists([]);


                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&
                    order=name&per_page=${listsPerPage}&page=${currentPage}&sparkline=false`
                );

                setLists(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchList();
    },[currentPage])

    if (loading) 
        return <div>loading...</div>;
    if (error) 
        return <div>catched error</div>;
    if (!lists) 
        return null;
    
    return (
        <div className={styles.crypto_lists}>
            <table>
                <thead className={styles.header}>
                    <tr>
                        <th>
                            #
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
                <tbody className={styles.body}>
                    {
                        lists.map((list, index) => (
                            <tr key={list.id}>
                                <td className={styles.index}>{(index + 1) + (listsPerPage * (currentPage - 1))}</td>
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
                   
                </tbody>
            </table>
            <Paging
                listsPerPage={listsPerPage}
                paginate={setCurrentPage}
                totalLists={totalLists}
                page={currentPage}
            />
        </div>
    );
}

export default CryptoList
