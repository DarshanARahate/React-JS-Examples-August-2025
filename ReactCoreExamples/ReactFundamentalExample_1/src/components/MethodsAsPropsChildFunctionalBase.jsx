

export default function MethodsAsPropsChildFunctionalBase({ greetHandler }) {


    return (
        <div>
            <button onClick={() => greetHandler("Child")}>
                Greet parent
            </button>
        </div>
    );
}


