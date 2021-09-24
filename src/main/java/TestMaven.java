import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import javax.swing.*;
import java.io.IOException;
import java.io.PrintWriter;

public class TestMaven{
    public static void main(String[] args) throws ClassNotFoundException, UnsupportedLookAndFeelException, InstantiationException, IllegalAccessException, IOException {
        //Jsoup;
        PrintWriter out = new PrintWriter("jsoupTest.txt");
        Document document = Jsoup.connect("https://en.wikipedia.org/").get();

        //get all images
        Elements images = document.select("img[src~=(?i)\\.(png|jpe?g|gif)]");
        for (Element image : images) {

            out.println("\nsrc : " + image.attr("src"));
            out.println("height : " + image.attr("height"));
            out.println("width : " + image.attr("width"));
            out.println("alt : " + image.attr("alt"));

        }

    }
}                                                   