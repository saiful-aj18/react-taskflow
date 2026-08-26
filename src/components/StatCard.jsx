const StatCard = ({ title, value }) => {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">
            {title}
          </p>
          <p className="mt-2 text-3xl font-bold text-gray-900">
            {value}
          </p>
        </div>
        {/* Icon div */}
      </div>
    </div>
  )
}

export default StatCard;