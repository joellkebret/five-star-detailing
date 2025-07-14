const Admin = () => {
  return (
    <div className="min-h-screen bg-toronto-light flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-12 text-center max-w-2xl mx-4">
        <div className="w-20 h-20 bg-toronto-blue rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h1 className="text-4xl font-bold text-toronto-dark mb-4">
          Admin Dashboard
        </h1>
        
        <p className="text-xl text-toronto-gray mb-8">
          Coming Soon
        </p>
        
        <p className="text-toronto-gray mb-8">
          This admin dashboard will provide comprehensive management tools for Five Star Detailing, 
          including booking management, customer database, and service analytics.
        </p>
        
        <a href="/" className="btn-primary">
          Back to Home
        </a>
      </div>
    </div>
  )
}

export default Admin 