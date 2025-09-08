import MethodsAsPropsChildFunctionalBase from "./MethodsAsPropsChildFunctionalBase";


export default function MethodsAsPropsParentFunctionalBase() {
    const greetParent = (name) => {
        alert(`Hello from ${name} to Parent`);
    }

    return (
        <div>
            <h4>
                Function-Base Example
            </h4>

            <MethodsAsPropsChildFunctionalBase greetHandler={greetParent} />
        </div>
    );
}








