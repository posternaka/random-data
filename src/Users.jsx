import { useEffect, useRef, memo } from 'react';
import { generateUsers } from './generateUsers';

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

const Users = ({ language, rangeNumber, randomNumber, page, allPage, setPage }) => {
    const ref = useRef();

    useEffect(() => {
        const flag = checkVisible(ref.current);

        if(flag) {
            setPage(allPage + 1);
            return;
        }

        const func = () => {
            const flag = checkVisible(ref.current);
            if(flag) {
                setPage(allPage + 1);
                window.removeEventListener('scroll', func);
                return;
            }
        }

        window.addEventListener('scroll', func);
        
        return () => window.removeEventListener('scroll', func);

    }, []);



    
  return (
    <>
        {
            generateUsers(randomNumber, language, rangeNumber, page).map((it, i, array) => {
                if(array.length - 1 === i) {
                    return (
                        <tr key={it.id} ref={ref}>
                            <td>{it.index}</td>
                            <td>{it.id}</td>
                            <td>{it.fullName}</td>
                            <td>{it.address}</td>
                            <td>{it.phone}</td>
                        </tr>
                    )
                } 

                return (
                    <tr key={it.id}>
                        <td>{it.index}</td>
                        <td>{it.id}</td>
                        <td>{it.fullName}</td>
                        <td>{it.address}</td>
                        <td>{it.phone}</td>
                    </tr>
                )
                
            })
        }
    </>
  )
}

export default memo(Users);