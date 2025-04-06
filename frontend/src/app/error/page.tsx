"use client";
import { Box, Center, Container, Paper, Text, Title, Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import { home_path } from "../../constants/routes";

export default function ErrorPage() {
  const router = useRouter()
  return (
    <Center h="100vh" bg="gray.0">
      <Container size="sm">
        <Paper shadow="md" p="xl" withBorder radius="md">
          <Box ta="center">
            <Title order={1} c="red" mb="sm" fw={900} size="64px">
              500
            </Title>
            <Title order={3} mb="xs">
              Something went wrong
            </Title>
            <Text c="dimmed" mb="md">
              We couldn’t load your tasks. Please try again later or contact support.
            </Text>

            <Button onClick={() => router.push(home_path) } variant="light" color="red" size="sm">
              Go back to Home
            </Button>
          </Box>
        </Paper>
      </Container>
    </Center>
  );
}
