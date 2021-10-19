import static org.junit.jupiter.api.Assertions.fail;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

public class AppTest {

    @BeforeAll
    static void initAll() {
    }

    @BeforeEach
    void init() {
    }

    @Test
    void succeedTest() {
    }

    @Test
    void failingTest() {
        fail("Test failed!");
    }

    @Test
    @Disabled("for proof the truth")
    void skipTest() {
    }

    @Test
    void FailTest() {
        assumeTrue("abc".contains("Z"));
        fail("Test should have been failed");
    }


}

