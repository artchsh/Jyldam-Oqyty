import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <div className='flex items-center p-4 rounded bg-gray-100 dark:bg-black border border-transparent dark:border-gray-700 transition-transform transform active:scale-95'>
            <h1 className='whitespace-nowrap overflow-hidden overflow-ellipsis'>
                {props.title}
            </h1>
            <span></span>
        </div>
    );
}
export default Card;
