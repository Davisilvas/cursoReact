// com o hook useImperativeHandle temos como acionar ações em outro componente de forma imperativa. Como não podemos passar refs como props, precisamos usar a função fowardRef. Isso nos permite passar as referências e torna o nosso exemplo viável.

import SomeComponent from './SomeComponent'

import {useRef} from 'react'

const HookUseImperativeHandle = () => {
    const componentRef = useRef();

  return (
    <div>
        <h1>Hook useImperativeHandle</h1>
        <SomeComponent ref={componentRef} />
        <button
            onClick={()=> componentRef.current.validate()}
        >
            Validate
        </button>
        <hr />
    </div>
  )
}

export default HookUseImperativeHandle