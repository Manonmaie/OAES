package com.urest.v1.authoring_module.item;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

@Service
public class ItemService {
	@Autowired
	private ItemRepository itemRepository;
	
	private List<Item> items =  Arrays.asList(
			new Item(1, 100, "Test", "REMEMBER"),
			new Item(2, 100, "Test","UNDERSTAND"),
			new Item(3, 100, "Test","ANALYZE")
		);
	
	public List<Item> getAllItems() {
		List<Item> itemList = new ArrayList<>();
		itemRepository.findAll()
		.forEach(itemList::add);
		return itemList;
	}
	
	public Optional<Item> getItem(Integer id) {
		Optional<Item> item = itemRepository.findById(id);
		if (!item.isPresent())
			throw new RuntimeException("Item not found id-" + id);
		return item;
	}
	
	public Item createItem(Item question) {
		Item item = new Item();
		item.setQuestion(question.getQuestion());
		item.setMarks(question.getMarks());
		item.setCg_lvl(question.getCg_lvl());

		itemRepository.save(item);

		return item;
	}
}