import { Button, Typography } from "@mui/material";
import loadCustomRoutes from "next/dist/lib/load-custom-routes";
import { Key, useState } from "react";
import CardItems from "./carditms";


interface arrayLogic {
    title: string;
    image: string;
    text: string;
    slug: string;
}

interface datacardlogic {
    datalogic: arrayLogic[];
}

export default function CardLogic({ datalogic }: datacardlogic) {

    const [noOfElement, setnoOfElement] = useState(true);
    const loadMore = () => {
        setnoOfElement((!noOfElement));
    }

    const slice = noOfElement ? datalogic.slice(0, 2) : datalogic;
    return (
        <Typography>
            {slice.map((blog) => {
                return (<div key={blog.slug}>
                    <CardItems
                        title={blog.title}
                        image={blog.image}
                        text={blog.text} />
                </div>
                )
            })}
            <Button sx={{ marginLeft: 80, color: '#012f4e' }}
                onClick={() => loadMore()}
            >
                {noOfElement ? "Know More" : "Know Less"}
            </Button>
        </Typography>
    );
}
function intialSate(intialSate: any, arg1: boolean): [any, any] {
    throw new Error("Function not implemented.");
}
