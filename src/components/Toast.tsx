import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export type ToastData = {
    open: boolean;
    message: string;
    type: "success" | "error" | "info" | "warning";
}

export type ToastAction = {
    onClose: (state: boolean) => void;
}

type Props = {
    data: ToastData;

    action: ToastAction
}

const Toast = ({ data, action }: Props) => {
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        action.onClose(false);
    };

    return (
        <>
            <Snackbar
                open={data.open}
                autoHideDuration={5000}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={data.type} sx={{ width: '100%' }}>
                    {data.message}
                </Alert>
            </Snackbar>
        </>
    );
}

export default Toast;