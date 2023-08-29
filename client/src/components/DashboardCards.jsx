const DashboardCards = ({date,points}) => {
    let style = `bg-red-800 text-xs font-medium text-blue-100 w-1/12 text-center p-0.5 leading-none rounded-full`
    if(points>=100){
        style= "bg-red-600 text-xs font-medium text-blue-100 w-3/12 text-center p-0.5 leading-none rounded-full"
    }
    if(points>=200){
        style= "bg-yellow-600 text-xs font-medium text-blue-100 w-7/12 text-center p-0.5 leading-none rounded-full"
    }
    if(points>=250){
        style= "bg-green-600 text-xs font-medium text-blue-100 w-8/12 text-center p-0.5 leading-none rounded-full"
    }
    if(points>=300){
        style= "bg-green-700 text-xs font-medium text-blue-100 w-10/12 text-center p-0.5 leading-none rounded-full"
    }
    if(points>=350){
        style= "bg-green-800 text-xs font-medium text-blue-100 w-12/12 text-center p-0.5 leading-none rounded-full"
    }
    
    return (
        <div className="border border-2 border-gray-500 rounded-lg border-solid py-2 px-4 w-full flex justify-between items-center">
            <h6>{date}</h6>
            <div className="w-7/12 bg-gray-200 rounded-full dark:bg-gray-700">
                <div className={style}> {(points/350*100).toFixed(2)}%</div>
            </div>
            <h6>{points} Points</h6>
        </div>
    )
}


export default DashboardCards