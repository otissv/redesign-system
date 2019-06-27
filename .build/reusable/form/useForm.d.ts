/// <reference types="react" />
export declare function useForm({ initialState, onBlur, onChange, onSubmit, }: {
    initialState?: {
        fields: any[];
    };
    onBlur: any;
    onChange: any;
    onSubmit: any;
}): {
    dispatch: import("react").Dispatch<any>;
    model: any;
    handleChange: (e: import("react").ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: import("react").MouseEvent<HTMLInputElement, MouseEvent>) => void;
    handleSubmit: (e: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
};
export declare function buildModel({ fields, parent }: {
    fields: any;
    parent: any;
}): any;
export declare function validator({ dispatch, id, model, parent }: {
    dispatch: any;
    id: any;
    model: any;
    parent: any;
}): boolean;
