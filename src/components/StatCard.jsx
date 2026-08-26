const StatCard = ({ title, value }) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm transition hover:border-slate-700 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">
            {title}
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-100">
            {value}
          </p>
        </div>
        {/* Icon div */}
      </div>
    </div>
  )
}

export default StatCard;