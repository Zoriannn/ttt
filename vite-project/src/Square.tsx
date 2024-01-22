type Props = {
    index : number;
    onClick(event: any) : void;
    player?: string;
}

function Square({index, onClick, player} : Props) {
    return(
        <div 
        data-cell-index = {index}
        className='h-36 border-solid border-4 border-slate-200 text-7xl 
        text-center flex justify-center items-center cursor-pointer'
        {...{onClick}}>
            <span
            data-cell-index = {index}>
                {player}
            </span>
        </div>
    )
}

export default Square