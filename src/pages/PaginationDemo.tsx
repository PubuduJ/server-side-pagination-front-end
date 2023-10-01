import React, { useState } from 'react';
import {Grid, InputAdornment, LinearProgress, TextField} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const PaginationDemo = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");


    return (
        <>
            <Grid bgcolor={"#E5E9F1"} pl={3} pr={3} pt={4} container rowSpacing={2}>
                <Grid item xs={12}><Typography variant={"h5"}>Server Side Pagination Demo</Typography></Grid>
                <Grid item xs={12}>
                    <Breadcrumbs separator="-" >
                        <Typography
                            color="inherit"
                            variant='subtitle2'
                        >
                            React
                        </Typography>
                        <Typography
                            color="inherit"
                            variant='subtitle2'
                        >
                            Data Grid
                        </Typography>
                        <Typography
                            fontWeight="bold"
                            variant='subtitle2'
                            color={"#005DFF"}
                        >
                            Pagination
                        </Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Search"
                        variant="standard"
                        value={searchQuery}
                        onChange={(event) => {
                            const value = event.target.value;
                            // Remove characters \, {, }, [, ], |, ^, `, %, &, #, +, _
                            const filteredValue = value.replace(/[\\{}[\]|^`%&#_+]/g, "");
                            setSearchQuery(filteredValue);
                        }}
                        InputProps={{
                            endAdornment: <InputAdornment position={"end"}><SearchIcon /></InputAdornment>
                        }}
                    />
                </Grid>
                <Grid item xs={12} mt={4} mb={5}>
                    <Box padding={2} style={{ backgroundColor: "white", borderRadius: 5 }}>
                        <Typography mt={-1} pb={1} fontWeight={"normal"} variant={"h6"}>Student List</Typography>
                        <Box bgcolor={"white"} sx={{ height: 400, width: '100%' }}>
                            <DataGrid
                                // slots={{
                                //     loadingOverlay: LinearProgress,
                                // }}
                                // loading={dataGridLoading}
                                columns={[]}
                                rows={[]}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            page: 0,
                                            pageSize: 5,
                                        },
                                    },
                                }}
                                pageSizeOptions={[5, 10, 15]}
                                disableRowSelectionOnClick
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default PaginationDemo;