import { Stack } from "@mui/material";
import StatsChart from "./StatsChart";

export default function GraphStats() {
    return (
        <Stack p={2} width='100%' bgcolor='background.paper'>
            <StatsChart />
        </Stack>
    )
}