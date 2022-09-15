import './page-style.css';

const Learning = () => {
    return(
        <div className=''>
            <ul className='langs-list'>
                <li className='lang'>
                    <a className='item' href='#javascript'><span className='javascript'></span>&ensp;&ensp;JavaScript</a>
                </li>
                <li className='lang'>
                    <a className='item' href='#typescript'><span className='typescript'></span>&ensp;&ensp;TypeScript</a>
                </li>
                <li className='lang'>
                    <a className='item' href='#python'><span className='python'></span>&ensp;&ensp;Python</a>
                </li>
                <li className='lang'>
                    <a className='item' href='#html'><span className='html'></span>&ensp;&ensp;HTML</a>
                </li>
                <li className='lang'>
                    <a className='item' href='#css'><span className='css'></span>&ensp;&ensp;CSS</a>
                </li>
                <li className='lang'>
                    <a className='item' href='#sql'><span className='sql'></span>&ensp;&ensp;SQL</a>
                </li>
            </ul>
        </div>
    )
}

export default Learning;