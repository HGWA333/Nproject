import { Flex, Text, Divider, View } from "@aws-amplify/ui-react";
import { Autocomplete, Pagination, usePagination } from "@aws-amplify/ui-react";
import * as React from "react";

export const Test = () => {
  const paginationProps = usePagination({ totalPages: 8 });

  return (
    <>
      <Flex direction={{ base: "row", large: "column" }}>
        <View
          width="100%"
          backgroundColor={{
            base: "black",
            small: "black",
            medium: "black",
            large: "white",
            xl: "white",
            xxl: "white",
          }}
        >
          <Text
            as="span"
            fontSize={["1rem", "2rem", "3rem", "4rem", "5rem", "6rem"]}
            lineHeight="normal"
          >
            Before
          </Text>
          <Divider label="OR" />
          <Text
            as="span"
            fontSize={["1rem", "2rem", "3rem"]}
            lineHeight="normal"
          >
            After
          </Text>
        </View>
        <View
          width="100%"
          backgroundColor={{ base: "orange", large: "yellow" }}
        >
          <Autocomplete
            label="Autocomplete"
            options={[
              { id: "apple", label: "apple" },
              { id: "banana", label: "banana" },
              { id: "cherry", label: "cherry" },
              { id: "grape", label: "grape" },
              { id: "kiwis", label: "kiwis" },
              { id: "lemon", label: "lemon" },
              { id: "mango", label: "mango" },
              { id: "orange", label: "orange" },
              { id: "strawberry", label: "strawberry" },
            ]}
            placeholder="검색어를 입력하세요"
          />
        </View>
        <View width="100%" backgroundColor={{ base: "lemon", large: "beige" }}>
          <Pagination {...paginationProps} />
        </View>
      </Flex>
    </>
  );
};

export default Test;
