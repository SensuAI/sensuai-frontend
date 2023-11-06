
import * as React from "react"
import { Flex, Heading, Text, Card, Badge, Link, Button, Grid, Box } from '@radix-ui/themes'
import { PersonIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import { MoreHorizontal } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Plates = (props: any) => (
  <Box height="9">
    <Card>
      <Flex direction="row" justify="start">
        <EyeOpenIcon />
        <Heading size="3" ml="7" mt="-1">
          {props.plate}
        </Heading>
        <Flex width="8" direction="row" justify="center" ml="2" mt="-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-5 w-5">
                <span className="sr-only">Abrir menú</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="bottom">
              <DropdownMenuLabel className="text-center">
                <Heading size="3">Información</Heading>
              </DropdownMenuLabel>
              <DropdownMenuItem>{props.rowone}</DropdownMenuItem>
              <Flex justify="center" mr="1">
                <DropdownMenuItem className="text-center">{props.rowtwo}</DropdownMenuItem>
              </Flex>
              <DropdownMenuItem></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Flex>
      </Flex>
    </Card>
  </Box>
);

export default Plates;
