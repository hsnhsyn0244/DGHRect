import React from 'react'

function Container({children}) {
  return (
    <div>
        <div>Container bloğu çalıştı</div>
        {children}
        {/* Children propsu product sayfasını temsil ediyor onun değerlerini yansıtıyor. */}
    </div>
  )
}

export default Container