import * as React from "react"

import { Container, Flex, Heading, Text, Card, Badge, Box, TextFieldRoot, TextFieldInput, Link, Button } from '@radix-ui/themes'
import { ChatBubbleIcon } from '@radix-ui/react-icons'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackgroundSVG from "@/components/backgroundsvg"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export default function Listing() {
  return (
    <main className="flex p-4">
      <BackgroundSVG/>

      <div>

      <ScrollArea className="h-[680px] w-[350px] ">
      
    <Container size="1">
      

        <Flex gap="4" direction="column">

          <Card>
            <Flex gap="4" direction="column">
              <Text>PAY-344 - Jorge Isidro Negrete Martínez</Text>
              <Flex gap="2">
                <Badge color="blue">Cliente registrado</Badge>
                <Badge color="blue">SPIN CARD</Badge>
              </Flex>
              <Text>
                Promociones disponibles.
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  <ChatBubbleIcon />
                  <Text color="gray" ml="2" size="1">3 Comments</Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>

          <Card>


            <Flex gap="4" direction="column">
              <Text>NTZ-345</Text>
              <Flex gap="2">
                <Badge color="orange">Cliente no registrado</Badge>
                <Badge color="orange">Sin SPIN CARD.</Badge>
              </Flex>
              <Text>
                Ofrecer unirse a SPIN CARD.
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  <ChatBubbleIcon />
                  <Text color="gray" ml="2" size="1">3 Comments</Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>

          <Card>
            <Flex gap="4" direction="column">
              <Text>MTA-435</Text>
              <Flex gap="2">
                <Badge color="orange">Cliente no registrado</Badge>
                <Badge color="orange">Sin SPIN CARD</Badge>
              </Flex>
              <Text>
                No ofrecer unirse a SPIN CARD.
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  <ChatBubbleIcon />
                  <Text color="gray" ml="2" size="1">3 Comments</Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>

          <Card>
            <Flex gap="4" direction="column">
              <Text>MTA-435</Text>
              <Flex gap="2">
                <Badge color="orange">Cliente no registrado</Badge>
                <Badge color="orange">Sin SPIN CARD</Badge>
              </Flex>
              <Text>
                No ofrecer unirse a SPIN CARD.
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  <ChatBubbleIcon />
                  <Text color="gray" ml="2" size="1">3 Comments</Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>

          <Card>
            <Flex gap="4" direction="column">
              <Text>MTA-435</Text>
              <Flex gap="2">
                <Badge color="orange">Cliente no registrado</Badge>
                <Badge color="orange">Sin SPIN CARD</Badge>
              </Flex>
              <Text>
                No ofrecer unirse a SPIN CARD.
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  <ChatBubbleIcon />
                  <Text color="gray" ml="2" size="1">3 Comments</Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>
          
        </Flex>
      </Container>
    </ScrollArea>

    </div>

    <div>
    <ScrollArea className="h-[200px] w-[350px] rounded-md border">
      
      <div>
        <h4 className="mb-4 text-sm font-medium leading-none text-center">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm text-center">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>

    </div>
    </main>
  )
}
