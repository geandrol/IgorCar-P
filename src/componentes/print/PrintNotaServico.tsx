import { useRef } from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import PageNataServico from "./PageNataServico";

export default function PrintNotaServico({servico, cliente}: any) {

    const contentRef = useRef(null);

   

    return (
        <>
            <div>
                <ReactToPrint content={() => contentRef.current}>
                    <PrintContextConsumer >
                        {({ handlePrint }) => (
                            <button onClick={handlePrint} className="bg-blue-400 hover:bg-blue-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                <img width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/print.png" alt="print" />
                            </button>
                        )}
                    </PrintContextConsumer>
                    <div style={{ display: 'none' }}>
                        <div ref={contentRef} className="flex justify-center mt-5">
                            <PageNataServico servico={servico} cliente={cliente} />
                        </div>
                    </div>
                </ReactToPrint>
            </div>
        </>
    )
}