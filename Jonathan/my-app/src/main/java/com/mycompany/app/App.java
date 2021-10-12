package com.mycompany.app;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import java.io.IOException;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )throws IOException
    {
        System.out.println( "Hello World!" );
  	Document doc = Jsoup.connect("http://en.wikipedia.org/").get();
        log(doc.title());

        Elements newsHeadlines = doc.select("#mp-itn b a");
        for (Element headline : newsHeadlines) {
            log("%s\n\t%s", headline.attr("title"), headline.absUrl("href"));
        }
    }

    public int add(int a, int b) {
	return a + b;
    }

    private static void log(String msg, String... vals) {
        System.out.println(String.format(msg, vals));
    }
}
