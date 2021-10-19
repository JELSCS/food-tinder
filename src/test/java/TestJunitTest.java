import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class TestJunitTest {

    @org.junit.jupiter.api.Test
    void add() {

        assertEquals(4, TestJunit.add(2, 2));

    }

    @org.junit.jupiter.api.Test
    void multiply() {
        assertAll(() -> assertEquals(4, TestJunit.multiply(2, 2)),
                () -> assertEquals(-4, TestJunit.multiply(2, -2)),
                () -> assertEquals(4, TestJunit.multiply(-2, -2)),
                () -> assertEquals(0, TestJunit.multiply(1, 0)));
    }

    @org.junit.jupiter.api.Test
    @DisplayName("Should check all items in the list")
    void shouldCheckAllItemsInTheList() {
        List<Integer> numbers = List.of(2, 3, 5, 7);
        Assertions.assertEquals(2, numbers.get(0));
        Assertions.assertEquals(3, numbers.get(1));
        Assertions.assertEquals(5, numbers.get(2));
        Assertions.assertEquals(7, numbers.get(3));
    }
}