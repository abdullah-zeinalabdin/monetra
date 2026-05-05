import { Stack, Typography } from "@mui/material";

type Props = {
    Icon: React.ReactNode,
    header: string,
    amount: number,
}
export default function ExpenseStat( { Icon, header, amount }: Props) {
    return (
        <Stack width="100%" p={2} bgcolor='background.paper' spacing={2} alignItems='center' justifyContent='center'>
            {Icon}
            <Typography variant="h2" color="text.primary">{header}</Typography>
            <Typography variant="h2" color={amount >= 0 ? "primary.main" : "error.main"}>{amount}</Typography>
        </Stack>
    )
}