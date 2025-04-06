"use client";

import {
  Container,
  Group,
  Title,
  Box,
  Switch,
  useMantineColorScheme,
  rem,
} from "@mantine/core";
import { useTheme } from "@/providers/ThemeProvider";
import { useMediaQuery } from "@mantine/hooks";
import { usePathname } from "next/navigation";
import { error_path } from "../constants/routes";

export default function TopBar() {
  const { toggleTheme } = useTheme();
  const { colorScheme } = useMantineColorScheme();
  const isDesktop = useMediaQuery("(min-width: 62em)", true);
  const pathname = usePathname();
  if (pathname === error_path) return null;

  return (
    <Box
      bg={colorScheme === "light" ? "#ffffff" : "#1A1B1E"}
      style={{
        borderBottom: "1px solid",
        borderColor: colorScheme === "light" ? "#e0e0e0" : "#333",
        padding: rem(10),
      }}
    >
      <Container fluid>
        <Group justify="space-between" align="center">
          {isDesktop ? (
            <>
              <Box style={{ flex: 1 }} />
              <Title order={2} style={{ textAlign: "center", flex: 1 }}>
                TODO APP
              </Title>
              <Box
                style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
              >
                <Switch
                  checked={colorScheme === "dark"}
                  onChange={toggleTheme}
                  size="md"
                  color="gray"
                  label={colorScheme === "light" ? "Light" : "Dark"}
                />
              </Box>
            </>
          ) : (
            <>
              <Title order={2}>TODO APP</Title>
              <Switch
                checked={colorScheme === "dark"}
                onChange={toggleTheme}
                size="md"
                color="gray"
                label={colorScheme === "light" ? "Light" : "Dark"}
              />
            </>
          )}
        </Group>
      </Container>
    </Box>
  );
}
