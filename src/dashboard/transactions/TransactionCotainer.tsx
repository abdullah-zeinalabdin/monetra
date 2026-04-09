import { Stack, Divider } from "@mui/material";
import TransactionHeader from "./TransactionHeader";
import TransactionBarsContainer from "./TransactionBarsContainer";
import TransactionFooter from "./TransactionFooter";
type Props = {
    setOpen: () => void;
}

export default function TransactionContainer( { setOpen }: Props) {
    return (
        <Stack bgcolor='background.paper' flex={1}>
            <TransactionHeader />
            <Divider variant="fullWidth" sx={{color: 'text.secondary', my: '10px'}} />
            <TransactionBarsContainer />
            <Divider variant="fullWidth" sx={{color: 'text.secondary', my: '10px'}} />
            <TransactionFooter setOpen={setOpen}  />
        </Stack>
    )
}